import { Badge } from './Badge';

interface TagCloudProps {
  tags: string[];
}

export function TagCloud({ tags }: TagCloudProps) {
  return (
    <div className="flex max-w-[70ch] flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Badge key={index}>{tag}</Badge>
      ))}
    </div>
  );
}
