
import GetInTouch from "@/components/base/getInTouch"
import { Breadcrumbs } from "@/components/breadcrumbs"
import HeaderTitle from "@/components/header-title"

interface ClassPageProps {
  params: {
    slug: string;
  };
}

export default function Page(props: ClassPageProps) {
  const slug = props.params.slug;
  const decodedSlug = decodeURIComponent(slug);

  return (
    <>
     <div className={"bg-background"}>
      <div className="grid grid-cols-1 py-10 sm:py-20">
        <div className={"grid content-center px-8 font-helvetica"}>
          <Breadcrumbs
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Classes", href: "/classes" },
            ]}
          />
          <HeaderTitle>
            {decodedSlug}
          </HeaderTitle>
        </div>
      </div>
      <div className="py-20 lg:px-8 2xl:px-24">
        <GetInTouch />
      </div>
    </div>
    </>
  )
}
