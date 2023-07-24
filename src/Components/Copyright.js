import "./Copyright.css";

function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="under_sentence">
      <p>Copyright {currentYear} &copy;My Company. All rights reserved.</p>
    </footer>
  );
}

export default Copyright;
