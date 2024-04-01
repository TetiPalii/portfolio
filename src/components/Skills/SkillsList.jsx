import { nanoid } from "nanoid"
import { SkillsItem } from "./SkillsItem"

export const SkillsList = ({mySkills}) => {
    return <ul className="flex flex-wrap gap-2">
        {mySkills.map((skillsItem) => { return <SkillsItem skillsItem={skillsItem} key={nanoid(4)}/>})}
    </ul>
}