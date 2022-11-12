import Link from 'next/link';

export default function LegalNoticePage() {
  return (
    <div>
      <h1>Legal Notice</h1>
      <p>
        Software Development
        <br />
        Glenn Reyes e.U.
        <br />
        Wagramer Straße 151/10 1220 Vienna, Austria
      </p>
      <p>
        <Link href="mailto:glenn@glennreyes.com">glenn@glennreyes.com</Link>
        <br />
        VAT: ATU71727526
        <br />
        Member of <Link href="https://www.wko.at">WKO</Link>
      </p>
      <p>
        Reg. no: FN 552052b
        <br />
        Court: Handelsgericht Wien
        <br />
        Applicable legislation: Gewerbeordnung https://ris.bka.gv.at
      </p>
    </div>
  );
}
