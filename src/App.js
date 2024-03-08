import { useState, useEffect } from "react";

const data = [
  { name: "Amit" },
  { name: "Ashish" },
  { name: "Srishti" },
  { name: "Aditya" },
];

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;

    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) => {
        return user.name === name ? { ...user, isChecked: checked } : user;
      });
      setUsers(tempUser);
    }
  };

  return (
    <div>
      <form>
        <h3>Select Users</h3>
        <div>
          <input
            type="checkbox"
            onChange={handleChange}
            name="allSelect"
            checked={
              users.filter((user) => user?.isChecked !== true).length < 1
            }
          />
          <label>All Select </label>
        </div>
        {users.map((user) => {
          return (
            <div>
              <input
                type="checkbox"
                name={user.name}
                onChange={handleChange}
                checked={user?.isChecked || false}
              />
              <label>{user.name}</label>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default App;
