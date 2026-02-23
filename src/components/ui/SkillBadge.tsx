import * as SiIcons from 'react-icons/si'
import type { IconType } from 'react-icons'

interface SkillBadgeProps {
    name: string
    iconName: string
}

const iconMap: Record<string, IconType> = SiIcons as unknown as Record<string, IconType>

export default function SkillBadge({ name, iconName }: SkillBadgeProps) {
    const IconComponent = iconMap[iconName]

    return (
        <div className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3 border border-tertiary hover:border-accent hover:scale-105 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 cursor-default">
            {IconComponent ? (
                <IconComponent
                    className="text-accent text-xl flex-shrink-0"
                    aria-label={`${name} icon`}
                />
            ) : (
                <span className="text-accent text-xl flex-shrink-0" aria-label={`${name} icon`}>
                    ⬡
                </span>
            )}
            <span className="text-text-primary text-sm font-medium">{name}</span>
        </div>
    )
}
