export default function FeatureCard({ icon, title }) {
    return (
      <div
        className="flex flex-col items-center text-center p-4 border-border-middle gap-4 sm:border-l
        sm:[border-image:linear-gradient(to_top,#fff_20%,#0000001A_20%_75%,transparent_75%)_16_1_1_space]"
      >
        <div className="w-10 h-10 text-secondary-light">{icon}</div>
        <p>{title}</p>
      </div>
    );
  }
  