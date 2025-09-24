import React, { useState, useEffect } from "react";

export default function NotifyForm({ form_location = "page" }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new URLSearchParams();
      formData.append("email", email);

      const res = await fetch("/notify.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setToastType("success");
        setToastMessage("✅ Thank you! We'll notify you.");
        setEmail(""); // clear input
      } else {
        setToastType("error");
        setToastMessage(data.error || "Failed to submit.");
      }
    } catch (err) {
      console.error(err);
      setToastType("error");
      setToastMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Auto-dismiss toast after 5 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const isTopbar = form_location === "topbar";
  const inputPlaceHolder = isTopbar
    ? "Get Notified When We Launch"
    : "Enter your email";

  return (
    <>
      {form_location === "page" && <h2>Get Notified When We Launch</h2>}
      <form
        className="d-flex" /*</>{`d-flex ${isTopbar ? "w-100" : "w-auto"}`} */
        style={isTopbar ? { maxWidth: "500px" } : {}}
      >
        <input
          type="email"
          className="d-flex w-100 p-2" // ✅ className={`form-control me-2 ${isTopbar ? "" : "w-auto"}`} only auto width on page
          style={{
            ...(!isTopbar ? { minWidth: "250px" } : {}),
            borderRadius: "10px", // fully rounded
            border: "1px solid #ccc", // subtle border
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)", // soft shadow
            paddingLeft: "15px",
            paddingRight: "15px",
            fontSize: "1rem",
            marginRight: "1rem",
          }}
          placeholder={
            isTopbar ? "Get Notified When We Launch" : "Enter your email"
          }
        />
        <button type="submit" className="btn btn-danger">
          Notify
        </button>
      </form>
    </>
  );
}
