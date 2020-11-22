import react from "react";

export default function ServerError() {
  return <div>SERVER ERROR</div>
}
export async function getServerSideProps(context) {
  throw "error!"
  return {
    props: {}, // will be passed to the page component as props
  }
}