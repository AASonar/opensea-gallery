import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIcon, Space } from "@mantine/core";

export default function Bookmark() {
  return (
    <ActionIcon
      variant="transparent"
      className="opacity-80 text-2xl  text-white"
    >
      <FontAwesomeIcon icon={["far", "bookmark"]} />
    </ActionIcon>
  );
}
