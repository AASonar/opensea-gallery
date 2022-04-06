import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionIcon, Space } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { showNotification, updateNotification } from "@mantine/notifications";

interface BookmarkProps {
  name: string;
}

const styles = () => ({
  root: { backgroundColor: "#313248", borderColor: "#464874", color: "white" },
  title: { color: "white" },
  description: { color: "white", opacity: 0.7 },
});

export default function Bookmark({ name }: BookmarkProps) {
  const [value, toggle] = useToggle("unsaved", ["unsaved", "saved"]);

  const handleClick = () => {
    toggle();

    value === "unsaved"
      ? showNotification({
          title: "Saved NFT 🔖",
          message: name,
          styles: styles,
          color: "blue",
          autoClose: 1500,
        })
      : showNotification({
          title: "Unsaved NFT ❌",
          message: name,
          color: "red",
          styles: styles,
          autoClose: 1500,
        });
  };

  return (
    <ActionIcon onClick={handleClick} variant="transparent">
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
