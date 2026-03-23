import { useState, ChangeEvent, FormEvent } from "react";
import { supabase } from "./data/supabase.js";
import Footer from "./components/Footer.tsx";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function Sign_up() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
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

    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.length < 6
    ) {
      setMessage("❌ Fill all fields correctly (password min 6 chars)");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("users").insert([
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
    ]);

    if (error) {
      console.error(error);
      setMessage("❌ Registration failed");
    } else {
      setMessage("✅ Registration successful");
      setFormData({ name: "", email: "", password: "" });
    }

    setLoading(false);
  };

  return (
    <>
      <div className="payment-container">
        <form className="payment-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>

          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />

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
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          {message && <p className="message">{message}</p>}
        </form>
      </div>

      <Footer />
    </>
  );
}