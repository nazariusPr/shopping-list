import { Comment as CommentType } from "../types/ProductTypes";
import { Card } from "react-bootstrap";
import { formatDate } from "../utilities/formatter";

type CommentProps = {
  comment: CommentType;
};

function Comment({ comment }: CommentProps) {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Text>{comment.description}</Card.Text>
        <footer className="blockquote-footer">
          {formatDate(comment.date)}
        </footer>
      </Card.Body>
    </Card>
  );
}

export default Comment;
