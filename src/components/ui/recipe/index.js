import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RecipesList({ recipeList }) {
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                      <div className="w-full aspect-w-16 aspect-h-9 lg:h-80">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-full w-full object-cover object-top"
                        ></img>
                      </div>
                      <div className="p-6">
                        <h2 className="text-lg font-bold text-gray-900">
                          {" "}
                          {recipe.name}
                        </h2>
                        <div className="mt-4 flex items-center flex-wrap grap-2">
                          <p className="text-lg text-gray-600">
                            {" "}
                            Rating : {recipe.rating}
                          </p>
                          <div className="ml-auto">
                            <p className="text-lg text-gray-600 font-bold">
                              {recipe.cuisine}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : "hi"}
        </div>
      </div>
      <div className="bg-gray-100 text-center py-4 mt-auto">
        <p className="text-gray-700">&copy; 2024 All rights reserved.</p>
        <p className="mt-2">
          <a
            href="https://www.instagram.com/chiragdhingra0"
            target="_blank"
            class="text-blue-500 hover:text-blue-700 mx-2"
          >
            Instagram
          </a>{" "}
          |
          <a
            href="https://www.linkedin.com/in/chirag2199/"
            target="_blank"
            class="text-blue-500 hover:text-blue-700 mx-2"
          >
            LinkedIn
          </a>{" "}
          |
          <a
            href="https://github.com/Chirag-2199"
            target="_blank"
            class="text-blue-500 hover:text-blue-700 mx-2"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
