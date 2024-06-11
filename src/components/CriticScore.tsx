import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score >= 90 ? "yellow" : score > 75 ? "green" : "red";
  return (
    <Badge fontSize="14px" paddingX="2px" borderRadius="5px" color={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
