import { useState, ChangeEvent, FormEvent } from "react";
import { supabase } from "./data/supabase.js";
import Footer from "./components/Footer.js";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  // 🔒 Prevent login if already logged in
  const existingUser = localStorage.getItem("user");
  if (existingUser) {
    setMessage("⚠️ Already logged in");
    return;
  }

  // ✅ Validation
  if (formData.email.trim() === "" || formData.password.trim() === "") {
    setMessage("❌ Fill all fields");
    return;
  }

  setLoading(true);

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", formData.email)
    .eq("password", formData.password)
    .single();

  if (error || !data) {
    console.error(error);
    setMessage("❌ Invalid email or password");
  } else {
    // ✅ Save user
    localStorage.setItem("user", JSON.stringify(data));

    setMessage("✅ Login successful");

    // 🚀 Redirect after login
    window.location.href = "/"; // or "/profile"
  }

  setLoading(false);
};

  return (
    <>
      <div className="payment-container">
        <form className="payment-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          {message && <p className="message">{message}</p>}
        </form>
      </div>

      <Footer />
    </>
  );
}