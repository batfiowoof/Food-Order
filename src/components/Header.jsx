import Button from "./Button";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <h1>ReactMeals</h1>
        <img src="/public/logo.jpg" alt="" id="title" />
      </div>
      <nav>
        <Button textOnly={true}>Cart</Button>
      </nav>
    </header>
  );
}
