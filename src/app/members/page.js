import Link from "next/link";

const MembersPage = () => {
  return (
    <section className="flex flex-col items-center gap-6 text-center mt-10 mb-10">
      <Link href="/sol-members">
        <button className="w-full sm:w-80 px-10 py-3 text-lg sm:text-xl bg-primary text-white rounded-lg hover:bg-primary-dark transition">
          SOL Members
        </button>
      </Link>
      <Link href="/members/membershipform">
        <button className="w-full sm:w-80 px-10 py-3 text-lg sm:text-xl bg-primary text-white rounded-lg hover:bg-primary-dark transition">
          Membership Form
        </button>
      </Link>
      <Link href="/members/executivecommitte">
        <button className="w-full sm:w-80 px-10 py-3 text-lg sm:text-xl bg-primary text-white rounded-lg hover:bg-primary-dark transition">
          Executive Committee
        </button>
      </Link>
    </section>
  );
};

export default MembersPage;
