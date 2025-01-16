import { truncateFileName } from "../../utils/formatString";
import { Icon } from "../Icon";
import "./Card.css";
import IconTrashSmall from "../../../assets/images/Icon-trash-small.png";
import IconEdit from "../../../assets/images/Icon-edit.png";

interface CardProps {
  name: string;
  image?: string;
  onEdit: () => void;
  onDelete: () => void;
}

function Card({ name, onEdit, onDelete, image }: CardProps) {
  return (
    <div className="card">
      {image ? (
        <img src={image} alt={name} className="card-image" />
      ) : (
        <div className="card-icon">
          <Icon type="IconCard" height={64} width={64} />
        </div>
      )}
      <div className="card-content">
        <div className="line" />
        <h4>{truncateFileName(name, 36)}</h4>
      </div>
      <div className="card-actions">
        <button className="btn-delete" onClick={onDelete}>
          <img src={IconTrashSmall} /> Excluir
        </button>
        <button className="btn-edit" onClick={onEdit}>
          <img src={IconEdit} /> Editar
        </button>
      </div>
    </div>
  );
}

export default Card;
