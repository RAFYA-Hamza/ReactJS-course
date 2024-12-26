import { useFormStatus } from "react-dom";

export function Submit() {
  const { pending } = useFormStatus();
  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {!pending ? "Submit" : "Submiting..."}
      </button>
    </p>
  );
}