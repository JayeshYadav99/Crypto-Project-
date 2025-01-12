import { Card } from "@/components/ui/card";

interface TeamMember {
  name: string;
  designation: string;
  description: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Smith",
    designation: "Designation here",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur diam sed. Amet tellus nisi urna nec blandit enim gravida nec.",
    imageUrl: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Eliza Williams",
    designation: "Designation here",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur diam sed. Amet tellus nisi urna nec blandit enim gravida nec.",
    imageUrl: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "John Smith",
    designation: "Designation here",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur diam sed. Amet tellus nisi urna nec blandit enim gravida nec.",
    imageUrl: "/placeholder.svg?height=160&width=160",
  },
];

export function Team() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Team</h2>
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <Card key={index} className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-40 h-40 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={`/assets/profile.png`}
                    alt={`${member.name}'s profile`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500">{member.designation}</p>
              </div>
              <p className="text-gray-600 flex-1 md:mt-0 mt-4">
                {member.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
