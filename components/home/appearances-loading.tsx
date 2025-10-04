import { Card } from '../ui/layout/card';
import { List } from '../ui/layout/list';
import { H4 } from '../ui/typography/h4';

export function AppearancesLoading() {
  return (
    <section className="grid gap-6">
      <H4 asChild>
        <h2>Appearances</h2>
      </H4>
      <Card>
        <div className="grid gap-8">
          <div className="grid gap-6">
            <Card.Body>
              <List asChild>
                <ol>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <List.Item key={index}>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 shrink-0 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
                        <div className="grid flex-1 gap-2">
                          <div className="h-5 w-2/3 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
                          <div className="h-4 w-1/2 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
                        </div>
                      </div>
                    </List.Item>
                  ))}
                </ol>
              </List>
            </Card.Body>
          </div>
          <div className="h-10 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
        </div>
      </Card>
    </section>
  );
}
