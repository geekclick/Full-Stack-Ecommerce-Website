import desc1 from "@/assets/desc1.png";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ProductDesc() {
  return (
    <section className="w-full flex justify-center items-start my-10 bg-[#E3E7A8] py-12 h-full">
      <Tabs defaultValue="description" className="w-[700px] text-center">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="add-info">Additional Information</TabsTrigger>
          <TabsTrigger value="reviews">Reviews [5]</TabsTrigger>
        </TabsList>
        <TabsContent
          value="description"
          className="text-xs text-start space-y-6"
        >
          <p>
            India is a land known for its rich cultural heritage and artistic
            traditions. From ancient times, Indian artisans have been creating
            exquisite handicrafts that showcase their craftsmanship, creativity,
            and deep-rooted traditions. These handicrafts reflect the diverse
            cultural landscape of the country, with each region having its
            unique art forms and techniques.
          </p>
          <p>
            In this blog, we embark on a journey to explore the timeless charm
            of 30 famous Indian handicrafts. From the intricate embroidery of
            Lucknow’s Chikankari to the vibrant block prints of Rajasthan’s
            Ajrakh, we will delve into the history, significance, and artistic
            beauty of these masterpieces. Join us as we celebrate the artistry
            and cultural richness of India through its mesmerizing handicrafts.
          </p>
          <div className="flex justify-between items-center space-x-6">
            <div className="w-full bg-white">
              <img src={desc1} alt="" />
            </div>
            <div className="w-full bg-white">
              <img src={desc1} alt="" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="add-info" className="text-xs text-start space-y-6">
          <p>
            India is a land known for its rich cultural heritage and artistic
            traditions. From ancient times, Indian artisans have been creating
            exquisite handicrafts that showcase their craftsmanship, creativity,
            and deep-rooted traditions. These handicrafts reflect the diverse
            cultural landscape of the country, with each region having its
            unique art forms and techniques.
          </p>
          <p>
            In this blog, we embark on a journey to explore the timeless charm
            of 30 famous Indian handicrafts. From the intricate embroidery of
            Lucknow’s Chikankari to the vibrant block prints of Rajasthan’s
            Ajrakh, we will delve into the history, significance, and artistic
            beauty of these masterpieces. Join us as we celebrate the artistry
            and cultural richness of India through its mesmerizing handicrafts.
          </p>
        </TabsContent>
        <TabsContent value="reviews" className="text-xs text-start space-y-6">
          <p>
            India is a land known for its rich cultural heritage and artistic
            traditions. From ancient times, Indian artisans have been creating
            exquisite handicrafts that showcase their craftsmanship, creativity,
            and deep-rooted traditions. These handicrafts reflect the diverse
            cultural landscape of the country, with each region having its
            unique art forms and techniques.
          </p>
          <p>
            In this blog, we embark on a journey to explore the timeless charm
            of 30 famous Indian handicrafts. From the intricate embroidery of
            Lucknow’s Chikankari to the vibrant block prints of Rajasthan’s
            Ajrakh, we will delve into the history, significance, and artistic
            beauty of these masterpieces. Join us as we celebrate the artistry
            and cultural richness of India through its mesmerizing handicrafts.
          </p>
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default ProductDesc;
