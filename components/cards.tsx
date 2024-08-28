import React from "react";

import { Card, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

interface CardProps {
  cardsrow?: boolean;
  cardssquare?: boolean;
  cardstwo?: boolean;
  cardsthree?: boolean;
  description: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  margin?: boolean;
  title: string;
}

export default function CardsRow({
  cardsrow = false,
  cardssquare = false,
  cardstwo = false,
  cardsthree = false,
  description,
  image1,
  image2,
  image3,
  image4,
  margin = false,
  title,
}: CardProps) {
  return (
    <main className={`${margin ? "mb-16" : ""} "p-6" "font-interText"`}>
      <div className="flex justify-center items-center pt-32 pb-16">
        <div className="w-2/3 mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-interTextBold text-center lg:text-left">
              {title}
            </h1>
          </div>
          <div>
            <p className="text-lg text-gray-600 text-center lg:text-left">
              {description}
            </p>
          </div>
        </div>
      </div>

      {cardsthree && (
        <div>
          <div className="flex justify-center">
            <Card
              isFooterBlurred
              radius="none"
              className="border-none w-full lg:w-[800px] bg-gray-700 rounded-l-lg"
            >
              <Image
                alt="Image 1"
                className="object-cover w-full h-[200px] lg:h-[450px]"
                src={image1}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              radius="none"
              className="border-none w-full lg:w-[300px] bg-gray-700 rounded-r-lg"
            >
              <Image
                alt="Image 1"
                className="object-cover w-full h-[200px] lg:h-[450px]"
                src={image1}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center gap-6 pt-6">
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none w-full lg:w-[540px] bg-gray-700"
            >
              <Image
                alt="Image 1"
                className="object-cover w-full h-[200px] lg:h-[450px]"
                src={image3}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>

            <Card
              isFooterBlurred
              radius="lg"
              className="border-none w-full lg:w-[540px] bg-gray-700"
            >
              <Image
                alt="Image 3"
                className="object-cover w-full h-[200px] lg:h-[450px]"
                src={image4}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}

      {cardsrow && (
        <div className="flex justify-center gap-6">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none w-full lg:w-[400px] bg-gray-700"
          >
            <Image
              alt="Image 1"
              className="object-cover w-full h-[200px] lg:h-[450px]"
              src={image1}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>

          <Card
            isFooterBlurred
            radius="lg"
            className="border-none w-full lg:w-[250px] bg-gray-700"
          >
            <Image
              alt="Image 2"
              className="object-cover w-full h-[200px] lg:h-[450px]"
              src={image3}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>

          <Card
            isFooterBlurred
            radius="lg"
            className="border-none w-full lg:w-[400px] bg-gray-700"
          >
            <Image
              alt="Image 3"
              className="object-cover w-full h-[200px] lg:h-[450px]"
              src={image2}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {cardssquare && (
        <div>
          <div className="flex justify-center gap-6 pt-6">
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none w-full lg:w-[540px] bg-gray-700"
            >
              <Image
                alt="Image 1"
                className="object-cover w-full h-[200px] lg:h-[450px]"
                src={image1}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>

            <Card
              isFooterBlurred
              radius="lg"
              className="border-none w-full lg:w-[540px] bg-gray-700"
            >
              <Image
                alt="Image 3"
                className="object-cover w-full h-[200px] lg:h-[450px]"
                src={image2}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-col lg:flex-row justify-center gap-6 mt-6">
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none w-full lg:w-[540px] bg-gray-700"
            >
              <Image
                alt="Image 1"
                className="object-cover w-full h-[200px] lg:h-[450px]"
                src={image3}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>

            <Card
              isFooterBlurred
              radius="lg"
              className="border-none w-full lg:w-[540px] bg-gray-700"
            >
              <Image
                alt="Image 3"
                className="object-cover w-full h-[200px] lg:h-[450px]"
                src={image4}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Notify me
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}

      {cardstwo && (
        <div className="flex justify-center gap-6 pt-6">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none w-full lg:w-[800px] bg-gray-700"
          >
            <Image
              alt="Image 1"
              className="object-cover w-full h-[200px] lg:h-[450px]"
              src={image1}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>

          <Card
            isFooterBlurred
            radius="lg"
            className="border-none w-full lg:w-[300px] bg-gray-700"
          >
            <Image
              alt="Image 3"
              className="object-cover w-full h-[200px] lg:h-[450px]"
              src={image2}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Available soon.</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </main>
  );
}
