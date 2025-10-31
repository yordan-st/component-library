import "./Avatar.scss";
import { HiUser } from "react-icons/hi2";

export interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  children?: React.ReactNode;
  imgSrc?: string;
  bgColor?: string;
}

export default function Avatar({
  children,
  imgSrc,
  bgColor,
  ...rest
}: AvatarProps) {
  const classNames = ["avatar", bgColor].join(" ").trim();

  return (
    <div className={classNames}>
      {imgSrc ? (
        <img className="avatar__image" src={imgSrc} {...rest} />
      ) : children ? (
        <span className="avatar-letters">{children}</span>
      ) : (
        <HiUser />
      )}
    </div>
  );
}
