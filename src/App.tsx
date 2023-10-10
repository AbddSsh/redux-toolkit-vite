import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/actionCreators";

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (error.length > 1) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {isLoading ? (
        <h1>Идет загрузка...</h1>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Список пользователей: </h1>
          {users.map((user) => (
            <div
              style={{
                border: "1px solid teal",
                borderRadius: "20px",
                fontWeight: "600",
                margin: "10px 0px",
                padding: "20px",
                width: "100%",
                textAlign: "start",
              }}
              key={user.id}
            >
              {user.id}. {user.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
