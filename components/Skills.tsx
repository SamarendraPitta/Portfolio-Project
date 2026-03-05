"use client";

import { motion } from "motion/react";

const skillCategories = [
  {
    name: "Languages",
    skills: [
      "Java",
      "Python",
      "C",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Backend & Frameworks",
    skills: [
      "Spring Boot",
      "Spring Security (OAuth2/JWT)",
      "JPA",
      "Hibernate",
      "React.js",
      "Node.js",
    ],
  },
  {
    name: "Distributed Systems & Messaging",
    skills: [
      "Apache Kafka",
      "RabbitMQ",
      "Microservices Architecture",
      "REST API Design",
    ],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Cassandra"],
  },
  {
    name: "Cloud & Infrastructure",
    skills: [
      "AWS (ECS, Lambda, S3, API Gateway, CloudWatch)",
      "Docker",
      "Kubernetes",
      "Linux",
    ],
  },
  {
    name: "Observability & Testing",
    skills: ["Prometheus", "Grafana", "CloudWatch", "JUnit", "Mockito", "TDD"],
  },
];

export function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h3 className="text-xl font-mono text-zinc-500 uppercase tracking-widest">
        02. Technical Skills
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-sm font-mono text-emerald-400">
              {category.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-md text-sm text-zinc-300 hover:border-zinc-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
