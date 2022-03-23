import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { EducationProvider } from "./contexts/EducationContext";
import { ExperienceProvider } from "./contexts/ExperienceContext";
import { SkillsProvider } from "./contexts/SkillsContext";
import { AchievementsProvider } from "./contexts/AchievementsContext";
import User from "./components/User";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ResumeTemplate from "./components/ResumeTemplate";

export default function App() {
  return (
    <div className="container">
      <h1 className="text-center my-3">Resume Builder</h1>
      <UserProvider>
        <EducationProvider>
          <ExperienceProvider>
            <SkillsProvider>
              <AchievementsProvider>
                <Routes>
                  <Route path="/" element={<User />} />
                  <Route path="education" element={<Education />} />
                  <Route path="experience" element={<Experience />} />
                  <Route path="achievements" element={<Achievements />} />
                  <Route path="skills" element={<Skills />} />
                  <Route path="resume" element={<ResumeTemplate />} />
                </Routes>
              </AchievementsProvider>
            </SkillsProvider>
          </ExperienceProvider>
        </EducationProvider>
      </UserProvider>
    </div>
  );
}
