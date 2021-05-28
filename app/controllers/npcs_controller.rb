class NpcsController < ApplicationController

  before_action :set_npc, only: :show

  #Get /NPCS
  def index
      @npcs = Npc.all

     render json: @npcs
  end

  #Get /NPC/1
  def show
    render json: @npc
  end

  def create
   @npc = Npc.new(npc_params)

   if npc.save
     render json: @npc, status: created
   else
     render json: @npc.errors, status: :unprocessable_entity
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

