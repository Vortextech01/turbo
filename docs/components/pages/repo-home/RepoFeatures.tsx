import { REPO_HOME_FEATURES } from "../../../content/features";
import { FadeIn } from "../home-shared/FadeIn";
import { FeaturesBento } from "../home-shared/FeaturesBento";

export function RepoFeatures() {
  return (
    <FadeIn className="py-16 md:py-24 lg:py-32">
      <FeaturesBento
        header="Why Sapiens?"
        body="Because our goal is to build way more than just lenguage models, we are compromised to develop machines that think by themselves."
        features={REPO_HOME_FEATURES}
      />
    </FadeIn>
  );
}
