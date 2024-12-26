import { useContext, useActionState } from "react";

import { OpinionsContext } from "../store/opinions-context";

import { Submit } from "./Submit";

export function NewOpinion() {
  const { addOpinion } = useContext(OpinionsContext);

  const [formState, formAction] = useActionState(shareOpinionAction, {
    errors: null,
  });

  async function shareOpinionAction(prevState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    const errors = [];

    if (userName.trim() === "") {
      errors.push("Please provide your name.");
    }

    if (title.trim() === "") {
      errors.push("Please enter a title.");
    }

    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("Opinion must be between 10 and 300 caracters long.");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body,
        },
      };
    }

    await addOpinion({ userName, title, body });

    console.log("Opinion sent to the backend");

    return {
      errors: null,
    };
  }

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValues?.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <Submit />
      </form>
    </div>
  );
}