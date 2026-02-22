import { portfolioConfig } from '@/config/portfolio.config';
import SectionHeading from '@/components/ui/SectionHeading';
import TimelineItem from '@/components/ui/TimelineItem';

export default function Experience() {
    const { experience } = portfolioConfig;

    return (
        <section id="experience" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading label="// 03" heading="Experience" />

                <div className="max-w-3xl mx-auto border-l-2 border-tertiary ml-1.5">
                    {experience.map((exp) => (
                        <TimelineItem key={exp.id} experience={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
}
