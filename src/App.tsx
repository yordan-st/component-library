import { Button, Avatar, Menu, MenuButton, MenuDropdown, MenuItem } from ".";
import { AiFillApple } from "react-icons/ai";
import { useState, useEffect } from "react";
import Badge from "./components/Badge";

function App() {
  const [avatarImgs, setAvatarImgs] = useState<string[]>([""]);

  // Load saved images from localStorage on component mount
  useEffect(() => {
    const savedImages = localStorage.getItem("avatarImages");
    if (savedImages) {
      setAvatarImgs(JSON.parse(savedImages));
    }
  }, []);

  // Handle file upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Limit to 2 images
      const filesToProcess = Array.from(files).slice(0, 2);
      const newImages: string[] = [];

      let processedCount = 0;

      filesToProcess.forEach((file, index) => {
        // Check if file is an image
        if (!file.type.startsWith("image/")) {
          alert(`File ${index + 1} is not an image`);
          return;
        }

        // Check file size (limit to 5MB)
        if (file.size > 5 * 1024 * 1024) {
          alert(`Image ${index + 1} size should be less than 5MB`);
          return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
          const base64String = e.target?.result as string;
          newImages[index] = base64String;
          processedCount++;

          // When all files are processed, update state and localStorage
          if (processedCount === filesToProcess.length) {
            const updatedImages = [
              ...newImages,
              ...avatarImgs.slice(newImages.length),
            ];
            setAvatarImgs(updatedImages);
            localStorage.setItem("avatarImages", JSON.stringify(updatedImages));
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  // Clear uploaded image
  const clearImage = () => {
    localStorage.removeItem("avatarImages");
    setAvatarImgs([""]);
  };

  const items = [
    { name: "BBC News", url: "https://www.bbc.com/news" },
    { name: "CNN", url: "https://www.cnn.com" },
    { name: "Reuters", url: "https://www.reuters.com" },
    { name: "The Guardian", url: "https://www.theguardian.com" },
    { name: "Associated Press", url: "https://apnews.com" },
  ];

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Component Library</h1>
      <p>Development playground for testing components</p>

      {/* === BUTTON VARIANTS === */}
      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Button Variants</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "baseline",
          }}
        >
          <Button variant="primary" size="extra-large">
            <AiFillApple />
            Primary
          </Button>
          <Button variant="secondary" size="large">
            <AiFillApple />
            Primary
          </Button>
          <Button variant="success">
            <AiFillApple />
            Primary
          </Button>
          <Button variant="danger" size="small">
            <AiFillApple />
            Primary
          </Button>
          <Button variant="ghost">
            <AiFillApple />
            Primary
          </Button>
        </div>
      </section>
      {/* === AVATAR VARIANTS === */}
      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Avatar Variants</h2>

        {/* Image Upload Section */}
        <div
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            border: "2px dashed #f0f0f0",
            borderRadius: "8px",
            backgroundColor: "#dfdfdf",
          }}
        >
          <h3>Upload Avatar Image</h3>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              multiple
            />
            {avatarImgs && (
              <Button variant="danger" size="small" onClick={clearImage}>
                Clear
              </Button>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Avatar bgColor="pink"></Avatar>
          <Avatar bgColor="red" imgSrc={avatarImgs[0]}></Avatar>
          <Avatar bgColor="blue">YS</Avatar>
          <Avatar bgColor="navy" imgSrc={avatarImgs[1]}></Avatar>
          <Avatar bgColor="green"></Avatar>
        </div>
      </section>
      {/* === MENU VARIANTS === */}
      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Menu Variants</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Menu>
            <MenuButton>Menu</MenuButton>
            <MenuDropdown>
              {items.map((item, index) => (
                <MenuItem key={index}>
                  <a href={item.url} target="_blank">
                    {item.name}
                  </a>
                </MenuItem>
              ))}
            </MenuDropdown>
          </Menu>
        </div>
      </section>
      {/* === BUTTON VARIANTS === */}
      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Button Variants</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "baseline",
          }}
        >
          <Badge>Test</Badge>
        </div>
      </section>
    </div>
  );
}

export default App;
