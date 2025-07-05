import { useState } from "react";
import { ipcRenderer } from "electron";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await ipcRenderer.invoke("login-user", {
        username,
        password
      });

      if (response.success) {
        sessionStorage.setItem("token", response.token); // تخزين مؤقت
        window.location.href = "/home";
      } else {
        setError("اسم المستخدم أو كلمة المرور غير صحيحة");
      }
    } catch (err) {
      console.error(err);
      setError("حدث خطأ أثناء تسجيل الدخول");
    }
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-2xl w-96 space-y-6">
        <h2 className="text-2xl font-bold text-center text-indigo-600">تسجيل الدخول</h2>

        {error && <p className="bg-red-100 text-red-600 px-4 py-2 rounded">{error}</p>}

        <div>
          <label className="block text-sm text-gray-700">اسم المستخدم</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700">كلمة المرور</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          دخول
        </button>
      </form>
    </div>
  );
}
