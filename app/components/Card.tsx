type TCard = {
  title: string;
  dueDate: string;
  label: string;
};

function getLabelColor(label: string) {
  let labelColor = "";
  switch (label) {
    case "Task":
      labelColor = "cyan";
      break;
    case "Issue":
      labelColor = "red";
      break;
    case "Improvement":
      labelColor = "yellow";
      break;
    default:
      labelColor = "teal";
      break;
  }
  return labelColor;
}

function Card({ title, dueDate, label }: TCard) {
  const labelColor = getLabelColor(label);

  return (
    <li className={"[&:not(:first-child)]:mb mb-3"}>
      <a href="#" className={"block rounded bg-white p-5 shadow"}>
        <div className={"flex justify-between"}>
          <p
            className={
              "text-left text-sm font-medium leading-snug text-gray-900"
            }
          >
            {title}
          </p>
          <span>
            <img
              className={"h-6 w-6 rounded-full"}
              src="https://i.pravatar.cc/100"
              alt="avatar"
            />
          </span>
        </div>
        <div className={"flex items-baseline justify-between"}>
          <div className={"text-sm text-gray-600"}>
            <time dateTime="2019-09-14">{dueDate}</time>
          </div>
          <div className={"mt-2"}>
            <span
              className={`inline-flex items-center rounded bg-${labelColor}-100 px-2 py-1 leading-tight`}
            >
              <svg
                className={`h-2 w-2 text-${labelColor}-500`}
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              <span
                className={`ml-2 text-sm font-medium text-${labelColor}-900`}
              >
                {label}
              </span>
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}

export default Card;
