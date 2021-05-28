class NpcController < ApplicationController

  #Get /characters
  def index
      @npcs = Npc.all

     render json: @characters
  end

  #Get /characters/1
  def show
    render json: @npc
  end

  def create
   @npc = Npc.new(npc_params)

   if character.save
     render json: @character, status: created
   else
     render json: @character.errors, status: :unprocessable_entity
   end
  end

  def update 
   @npc = Npc.find params[:id]

   if @npc.update(npc_params)
     render json: @npc
   else
     render json: @npc.errors, status: :unprocessable_entity
   end
  end

  def destroy
    @npc = Npc.find params[:id]

   @npc.destroy
  end

  private

  def set_npc
    @npc = Npc.find(params[:id])
  end

  def npc_params
   params.require(:npc).permit(:name, :imgURL, :biography, :notes)
  end
end

