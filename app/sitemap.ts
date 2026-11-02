import type { MetadataRoute } from "next";
import { pages } from "@/lib/pages";
import { achievementSets } from "@/lib/achievements";
import { notices } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/academics",
    "/admissions",
    "/events",
    "/notice-board",
    "/achievements",
    "/contact",
    "/contact-form",
    "/career",
    "/job-application-form",
    "/a-level-registration-form",
    "/admission-form-nursery-ix",
    "/primary-section-gulshan-e-maymar-admission-form",
    "/secondary-section-gulshan-e-maymar-admission-form",
    "/senior-section-gulzar-e-hijri-iii-viii-admission-form",
    "/junior-section-gulshan-e-iqbal-nursery-kg-i-ii-admission-form",
    "/test-syllabus",
    "/book-list-of-class-nursery-till-11-session-2025-26",
  ].map((route) => ({
    url: `https://beaconlightacademy.edu.pk${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const contentRoutes = Object.keys(pages).map((slug) => ({
    url: `https://beaconlightacademy.edu.pk/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const achievementRoutes = achievementSets.map((set) => ({
    url: `https://beaconlightacademy.edu.pk/${set.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const noticeRoutes = notices.map((notice) => ({
    url: `https://beaconlightacademy.edu.pk/${notice.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...contentRoutes, ...achievementRoutes, ...noticeRoutes];
}
