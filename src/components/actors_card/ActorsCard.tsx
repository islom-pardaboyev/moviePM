import { IMG_URL } from "../../hook/useEnv";
import CameraOff from "../../assets/camera-off.svg";
import { SinglePeople } from "../../utils";

function ActorsCard({ actor }: { actor: SinglePeople }) {
  return (
    <div className="flex cursor-pointer items-center gap-x-6">
      <img
        className="size-[80px] my-4 rounded-lg object-cover"
        src={`${IMG_URL}${actor.profile_path}`}
        alt=""
        onError={(e) => (e.currentTarget.src = CameraOff)}
      />
      <div className="text-sm">
        <b>{actor.original_name}</b>
        <p>{actor.character || actor?.job}</p>
      </div>
    </div>
  );
}

export default ActorsCard;
