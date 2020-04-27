import React from "react";

export default function Footer() {
  const time = new Date().getFullYear();

  return (
    <footer>
      <div>
        <p>&copy; {time} E-Commerce All right reserved</p>
      </div>
    </footer>
  );
}
