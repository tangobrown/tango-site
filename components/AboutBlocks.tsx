import SplitBlock from "./SplitBlock";

// The two text + photo blocks, shared by the home and about pages.

export function ApproachBlock({
  className = "",
  imageSide = "left",
  title = "Most small businesses don't need an agency. They need one person who takes real ownership.",
}: {
  className?: string;
  imageSide?: "left" | "right";
  title?: string;
}) {
  return (
    <SplitBlock
      id="approach"
      title={title}
      paragraphs={[
        "That's where I come in. I'll be your digital/website department who will take your success personally.",
        "I'll work my a** off each month to ensure your website looks good, outperforms your competition and attracts new leads or sales for your business. You'll be dealing with me (not an account manager, or agency junior) and you won't pay agency fees that put off small businesses getting help with their marketing efforts.",
      ]}
      buttonLabel="Let's connect"
      imageSrc="/about-2.jpg"
      imageAlt="Tim Brown working with clients at a laptop"
      imageSide={imageSide}
      className={className}
    />
  );
}

export function AboutBlock({ className = "", title = "Hi, I'm Tim" }: { className?: string; title?: string }) {
  return (
    <SplitBlock
      id="about"
      title={title}
      paragraphs={[
        "Hi, I'm Tim. I've been designing websites and running marketing since 2010, long enough to see plenty of algorithm changes and tech shifts come and go. Now it's AI, and I'm excited about how it can help small businesses automate the day-to-day and free up time for the work that matters. I'm also embracing it for ongoing SEO services to make things more cost-effective for my customers.",
        "A Kiwi by birth, I now live in Devon with my wife and son. When I'm not working, you'll find me watching rugby, cricket, American football or golf, or out exploring the South West countryside.",
      ]}
      buttonLabel="Start a project"
      imageSrc="/about-1.jpg"
      imageAlt="Portrait of Tim Brown"
      imageSide="left"
      className={className}
    />
  );
}
