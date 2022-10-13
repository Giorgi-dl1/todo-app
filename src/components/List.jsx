import deleteBtn from "../images/icon-cross.svg";
import checkIcon from "../images/icon-check.svg";
function List({
  data,
  setCompleted,
  deleteTodo,
  filterData,
  clearCompleted,
  filter,
}) {
  return (
    <div className="todos">
      <div className="todos-cont">
        {data.length === 0 ? (
          <div className="no-todos">No todos left</div>
        ) : (
          data?.map((item, index) => {
            return (
              <div
                key={index}
                className={item.completed ? "item completed" : "item active"}
              >
                <div className="circle-text">
                  <div
                    className="circle"
                    onClick={() => setCompleted(item.text)}
                  >
                    {item.completed && <img src={checkIcon} alt="check icon" />}
                  </div>
                  <p onClick={() => setCompleted(index)}>{item.text}</p>
                </div>
                {!item.completed && (
                  <div className="delete-btn" onClick={() => deleteTodo(index)}>
                    <img src={deleteBtn} alt="delete icon" />
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      <footer>
        <div className="items-left">
          <p>
            {data?.filter((item) => item.completed === false).length} items left
          </p>
        </div>
        <div className="filter">
          <p
            className={filter === "all" ? "action choice" : "action"}
            onClick={() => filterData("all")}
          >
            All
          </p>
          <p
            className={filter === "active" ? "action choice" : "action"}
            onClick={() => filterData("active")}
          >
            Active
          </p>
          <p
            className={filter === "completed" ? "action choice" : "action"}
            onClick={() => filterData("completed")}
          >
            Completed
          </p>
        </div>
        <p className="action" onClick={() => clearCompleted()}>
          Clear completed
        </p>
      </footer>
    </div>
  );
}

export default List;
