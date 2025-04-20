import SectionTitle from "../Common/SectionTitle";

const milestones = [
  { label: "Users Worldwide", value: "10,000+", icon: "🌍" },
  { label: "Projects Launched", value: "120+", icon: "🚀" },
  { label: "Uptime", value: "99.99%", icon: "⏱️" },
  { label: "Years in Business", value: "5+", icon: "🏆" },
];

const Milestones = () => (
  <section id="milestones" className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <div className="container">
      <SectionTitle
        title="Our Milestones"
        paragraph="A quick look at our journey and achievements so far."
        center
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {milestones.map((m) => (
          <div
            key={m.label}
            className="flex flex-col items-center justify-center rounded-lg bg-white dark:bg-gray-900 shadow-lg p-8 transition-transform hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <div className="text-4xl mb-3">{m.icon}</div>
            <div className="text-3xl font-bold text-primary mb-1">{m.value}</div>
            <div className="text-base text-gray-600 dark:text-gray-300 text-center">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Milestones;
