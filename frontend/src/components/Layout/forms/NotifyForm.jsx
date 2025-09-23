import React, { useState, useEffect } from "react";

export default function NotifyForm() {
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

  return (
    <section className="notify" id="notify">
      <div className="container">
        <h2>Get Notified When We Launch</h2>
        <form onSubmit={handleSubmit} className="notify-form">
          <div className="form-group d-flex mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="form-control me-2"
              disabled={loading}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Notify Me"}
            </button>
          </div>
        </form>

        {/* Toast container */}
        <div
          className="position-fixed top-0 end-0 p-3"
          style={{ zIndex: 9999 }}
        >
          {toastMessage && (
            <div
              className={`toast align-items-center text-white ${
                toastType === "success" ? "bg-success" : "bg-danger"
              } show`}
              role="alert"
            >
              <div className="d-flex">
                <div className="toast-body">{toastMessage}</div>
                <button
                  type="button"
                  className="btn-close btn-close-white me-2 m-auto"
                  onClick={() => setToastMessage("")}
                ></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
