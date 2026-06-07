"use client";

export default function Error({ error, reset }: any) {
  return (
    <>
      <h1>Error</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </>
  );
}
