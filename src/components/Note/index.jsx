import { Container } from "./style";
import { Tag } from "../../components/Tags";

export function Note({ data, ...rest }) {
  console.log(data);
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {data.tag && (
        <footer>
          {data.tag.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
