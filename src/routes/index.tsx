import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Mimundo</h1>
      <p>
        Task Manager with Time Stop
        <br />
        🤯👋
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Mimundo",
  meta: [
    {
      name: "mundo interno",
      content: "app de productividad del dia a dia",
    },
  ],
};
