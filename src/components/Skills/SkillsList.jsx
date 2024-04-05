import { nanoid } from "nanoid"
import { SkillsItem } from "./SkillsItem"

export const SkillsList = ({mySkills}) => {
    return <ul className="flex items-center mx-auto flex-wrap justify-center gap-4 max-w-[815px]">
        {mySkills.map((skillsItem) => {
            return <li key = {nanoid(4)} className="block px-8 py-2 border  border-[#4d4b4b] rounded-3xl  shadow-lg" >
                <SkillsItem skillsItem={skillsItem} />
                </li>
})}
    </ul>
}