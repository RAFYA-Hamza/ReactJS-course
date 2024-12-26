import { useActionState, useContext, useEffect } from "react";

import Input from "./Input";
import { CartContext } from "../store/cart-context";

import { isEmail, isNotEmpty } from "../util/validation";
import { calculateTotalPrice } from "../util/functions";

export default function Checkout({ ...props }) {
  const [cartItemState] = useContext(CartContext);
  const totalPrice = calculateTotalPrice(cartItemState);

  function CheckoutForm(prevState, formData) {
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const street = formData.get("street");
    const postalCode = formData.get("postalCode");
    const city = formData.get("city");

    let errors = [];

    if (!isEmail(email)) {
      errors.push("Please provide us a valid email address.");
    }

    if (!isNotEmpty(fullName)) {
      errors.push("Please provide your first and last name.");
    }

    if (!isNotEmpty(street)) {
      errors.push("Please enter your street.");
    }
    if (!isNotEmpty(postalCode)) {
      errors.push("Please enter your postal code.");
    }
    if (!isNotEmpty(city)) {
      errors.push("Please provide your city.");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          fullName,
          email,
          street,
          postalCode,
          city,
        },
      };
    }

    return {
      errors: null,
      enteredValues: {
        fullName,
        email,
        street,
        postalCode,
        city,
      },
    };
  }
  const [formState, formAction] = useActionState(CheckoutForm, {
    errors: null,
  });

  const order = {
    items: cartItemState,
    customer: {
      email: formState.enteredValues?.email,
      name: formState.enteredValues?.fullName,
      street: formState.enteredValues?.street,
      "postal-code": formState.enteredValues?.postalCode,
      city: formState.enteredValues?.city,
    },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(order),
        });

        if (!response.ok) {
          console.log("Error submiting form.");
          return;
        } else {
          console.log("Form submitted successfully");
        }
      } catch (error) {
        console.error("Network error", error);
      }
    }

    const customer = Object.values(order.customer).every(
      (value) => value !== undefined && value !== "" && value !== null
    );

    if (customer) {
      fetchData();
    }
  }, [order]);

  return (
    <>
      <h2>Checkout</h2>
      <p>Total Amount: ${totalPrice}</p>
      <form action={formAction}>
        <Input
          htmlFor="fullName"
          label="Full Name"
          type="text"
          id="fullName"
          name="fullName"
          defaultValue={formState.enteredValues?.fullName}
        />

        <Input
          htmlFor="email"
          label="E-Mail Address"
          type="email"
          id="email"
          name="email"
          defaultValue={formState.enteredValues?.email}
        />

        <Input
          htmlFor="street"
          label="Street"
          type="text"
          id="street"
          name="street"
          defaultValue={formState.enteredValues?.street}
        />

        <div className="control-row">
          <Input
            htmlFor="postalCode"
            label="Postal Code"
            type="number"
            id="postalCode"
            name="postalCode"
            defaultValue={formState.enteredValues?.postalCode}
          />

          <Input
            htmlFor="city"
            label="City"
            type="text"
            id="city"
            name="city"
            defaultValue={formState.enteredValues?.city}
          />
        </div>
        <div className="modal-actions">
          <button type="reset" {...props} className="text-button">
            Close
          </button>
          <button type="submit" className="button">
            Submit Order
          </button>
        </div>
      </form>
      <ul className="errors">
        {formState.errors &&
          formState.errors.map((error) => <li key={error}>{error}</li>)}
      </ul>
    </>
  );
}
