export function ContentSection() {
  return (
    <div className="px-4 md:px-8">
      <div className="mx-auto max-w-5xl py-12 md:py-24">
        <div className="grid grid-cols-[repeat(24,_minmax(0,_1fr))] gap-8">
          <section className="col-[span_14_/_span_14] rounded-2xl bg-orange-50/75 p-4 md:p-8">
            <h3 className="text-lg font-medium text-zinc-600">Posts</h3>
          </section>
          <div className="col-[span_10_/_span_10] grid gap-8">
            <section className="rounded-2xl bg-orange-50/75 p-4 md:p-8">
              <h3 className="text-lg font-medium text-zinc-600">Events</h3>
            </section>
            <section className="rounded-2xl bg-orange-50/75 p-4 md:p-8">
              <h3 className="text-lg font-medium text-zinc-600">Newsletter</h3>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
