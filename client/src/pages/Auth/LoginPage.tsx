import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { errorState, loadingState } from '../../recoil/atom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useRecoilState(errorState); // Global error state
  const [isLoading, setLoading] = useRecoilState(loadingState); // Global loading state

  // Handle input changes
  const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e : FormEvent) => {
    e.preventDefault();
    
    setLoading(true); // Start loading
    setError(''); // Clear any previous error
    
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setLoading(false); // Stop loading on success
        localStorage.setItem('token', data.token); // Save JWT token to local storage
        
        navigate('/dashboard'); // Redirect to dashboard or any protected route
      } else {
        setLoading(false); // Stop loading on failure
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setLoading(false); // Stop loading on error
      setError(err.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">{isLoading? 'Loading' : "Login"}</button>
        </form>
    </div>
  );
};

export default LoginPage;
