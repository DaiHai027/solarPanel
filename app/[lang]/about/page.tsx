import { getDictionary } from "@/lib/dictionaries"
import AboutPage from "@/components/about-page"

type AboutProps = {
  params: { lang: string }
}

export default async function About(props: AboutProps) {
  // Explicitly awaiting props.params
  const params = await Promise.resolve(props.params)
  const lang = params.lang
  const dictionary = await getDictionary(lang)
  
  // Extract the about section from the dictionary and map to expected props format
  const aboutDictionary = dictionary.about
  
  // Map properties to match the expected interface in AboutPage
  const mappedDictionary = {
    title: aboutDictionary.title,
    subtitle: aboutDictionary.subtitle,
    storyTitle: aboutDictionary.ourStory,
    storyText1: aboutDictionary.storyText1,
    storyText2: aboutDictionary.storyText2,
    storyText3: aboutDictionary.storyText3,
    missionTitle: aboutDictionary.missionTitle,
    missionText: aboutDictionary.missionText,
    valuesTitle: "Our Values", // Default value if not in dictionary
    values: aboutDictionary.values,
    teamTitle: aboutDictionary.ourTeam,
    teamSubtitle: aboutDictionary.teamSubtitle,
    team: [] // This would need to be populated from the dictionary if it exists
  }

  return <AboutPage dictionary={mappedDictionary} lang={lang} />
} 