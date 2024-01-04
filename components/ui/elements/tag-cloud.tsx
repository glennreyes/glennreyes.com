import { Badge } from './badge';

interface TagCloudProps {
  tags: string[];
}

export const TagCloud = ({ tags }: TagCloudProps) => <div className="flex max-w-[70ch] flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Badge key={index}>{tag}</Badge>
      ))}
    </div>;
