import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIcon, Space } from "@mantine/core";
import { useToggle } from "@mantine/hooks";

export default function Bookmark() {
  const [value, toggle] = useToggle("unsaved", ["unsaved", "saved"]);

  return (
    <ActionIcon onClick={() => toggle()} variant="transparent">
      {value === "unsaved" ? (
        <FontAwesomeIcon
          icon={["far", "bookmark"]}
          className="opacity-80 text-2xl text-white"
        />
      ) : (
        <FontAwesomeIcon
          icon={["fas", "bookmark"]}
          className=" text-2xl text-teal"
        />
      )}
    </ActionIcon>
  );
}
