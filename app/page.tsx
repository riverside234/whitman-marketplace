import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <div
      key="1"
      className="grid grid-cols-2 gap-4  p-4  bg-gray-50 dark:bg-gray-900 h-screen"
    >
      <div className="flex flex-col  max-h-[calc(100vh-2rem)] border-r border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <Textarea
          className="flex-1   bg-gray-100 dark:bg-gray-700 rounded-lg p-2"
          placeholder="Type your prompt here..."
          style={{
            border: "none",
            resize: "none",
          }}
        />
        <Button className="self-end rounded-full px-4 py-2 m-4">Submit</Button>
      </div>

      <div className="flex flex-col max-h-[calc(100vh-2rem)] p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg  ">
        <ScrollArea className="flex-1 bg-gray-100 dark:bg-gray-700 p-4 rounded-md overflow-auto h-full">
          <div className="flex flex-col gap-4">
            <Card>
              <CardContent>
                <p>Suggestion 1...</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Suggestion 2...
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Suggestion 3...
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Suggestion 3...
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Suggestion 3...
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Suggestion 3...
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Suggestion 3...
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Suggestion 3...
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Suggestion 3...
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Suggestion 3...
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>

        <form className="mt-4 space-y-2 flex items-center relative">
          <div className="flex-grow relative">
            <Textarea
              className="pr-20 max-h-6"
              placeholder="Ask chatbot here..."
              style={{
                resize: "none",
              }}
            />
            <Button className="absolute right-7 bottom-2 rounded-full">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
